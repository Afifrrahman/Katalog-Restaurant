import LikeButtonInitiator from "../src/scripts/utils/like-button-initiator";
import FavoriteRestaurantIdb from "../src/scripts/data/favorite-restaurant-idb";

describe("Tidak menyukai Restoran", () => {
    const addLikeButtonContainer = () => {
        document.body.innerHTML = '<div id="likeButtonContainer"></div>';
    };

    beforeEach(async () => {
        addLikeButtonContainer();
        await FavoriteRestaurantIdb.putRestaurant({ id: 1 });
    });

    it("harus menampilkan widget yang berbeda ketika film disukai", async () => {
        await LikeButtonInitiator.init({
            likeButtonContainer: document.querySelector("#likeButtonContainer"),
            favoriteRestaurants: FavoriteRestaurantIdb,
            restaurant: {
              id: 1,
            },
          });
        expect(document.querySelector('[aria-label="unlike this restaurant"]')).toBeTruthy();
    });

    it("tidak boleh menampilkan widget seperti ketika film telah disukai", async () => {
        await LikeButtonInitiator.init({
            likeButtonContainer: document.querySelector("#likeButtonContainer"),
            favoriteRestaurants: FavoriteRestaurantIdb,
            restaurant: {
              id: 1,
            },
          });
        expect(document.querySelector('[aria-label="like this restaurant"]')).toBeFalsy();
    });

    it("harus dapat menghapus film yang disukai dari daftar ", async () => {
        await LikeButtonInitiator.init({
          likeButtonContainer: document.querySelector(
            "#likeButtonContainer"
          ),
          favoriteRestaurants: FavoriteRestaurantIdb,
          restaurant: {
            id: 1,
          },
        });
    
        document
          .querySelector("[aria-label='unlike this restaurant']")
          .dispatchEvent(new Event("click"));
        expect(await FavoriteRestaurantIdb.getAllRestaurants()).toEqual([]);
      });

    it("tidak boleh menimbulkan kesalahan ketika pengguna mengklik widget yang tidak disukai jika film yang tidak disukai tidak ada dalam daftar", async () => {
        await LikeButtonInitiator.init({
            likeButtonContainer: document.querySelector("#likeButtonContainer"),
            favoriteRestaurants: FavoriteRestaurantIdb,
      restaurant: {
        id: 1,
      },
    });
    await FavoriteRestaurantIdb.deleteRestaurant(1);
    document
      .querySelector('[aria-label="unlike this restaurant"]')
      .dispatchEvent(new Event("click"));
    expect(await FavoriteRestaurantIdb.getAllRestaurants()).toEqual([]);
  });
});
