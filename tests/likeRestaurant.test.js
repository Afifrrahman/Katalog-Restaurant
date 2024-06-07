import LikeButtonInitiator from "../src/scripts/utils/like-button-initiator";
import FavoriteRestaurantIdb from "../src/scripts/data/favorite-restaurant-idb";

describe("menyukai Restaurant", () => {
  const addLikeButtonContainer = () => {
    document.body.innerHTML = '<div id="likeButtonContainer"></div>';
  };

  beforeEach(() => {
    addLikeButtonContainer();
  });

  it("Harus menampilkan Tombol suka ketika restoran tersebut belum pernah disukai", async () => {
    await LikeButtonInitiator.init({
      likeButtonContainer: document.querySelector("#likeButtonContainer"),
      favoriteRestaurants: FavoriteRestaurantIdb,
      restaurant: {
        id: 1,
      },
    });
    expect(document.querySelector('[aria-label="like this restaurant"]')).toBeTruthy();
  });

  it("Tidak Boleh Menampilkan Tombol Suka Ketika restoran Tersebut Belum Pernah Disukai ", async () => {
    await LikeButtonInitiator.init({
      likeButtonContainer: document.querySelector("#likeButtonContainer"),
      favoriteRestaurants: FavoriteRestaurantIdb,
      restaurant: {
        id: 1,
      },
    });

    expect(document.querySelector('[aria-label="unlike this restaurant"]')).toBeFalsy();
  });

  it("Harus Bisa Menyukai Restoran ", async () => {
    await LikeButtonInitiator.init({
      likeButtonContainer: document.querySelector("#likeButtonContainer"),
      favoriteRestaurants: FavoriteRestaurantIdb,
      restaurant: {
        id: 1,
      },
    });

    document.querySelector("#likeButton").dispatchEvent(new Event("click"));
    const resto = await FavoriteRestaurantIdb.getRestaurant(1);
    expect(resto).toEqual({ id: 1 });

    await FavoriteRestaurantIdb.deleteRestaurant(1);
  });

  it("Tidak Boleh Menambahkan Restoran Lagi Ketika Sudah Disukai ", async () => {
    await LikeButtonInitiator.init({
      likeButtonContainer: document.querySelector("#likeButtonContainer"),
      favoriteRestaurants: FavoriteRestaurantIdb,
      restaurant: {
        id: 1,
      },
    });
    await FavoriteRestaurantIdb.putRestaurant({ id: 1 });
    document.querySelector("#likeButton").dispatchEvent(new Event("click"));
    expect(await FavoriteRestaurantIdb.getAllRestaurants()).toEqual([{ id: 1 }]);
    await FavoriteRestaurantIdb.deleteRestaurant(1);
  });

  it("Tidak boleh menambahkan restoran jika tidak memiliki id ", async () => {
    await LikeButtonInitiator.init({
      likeButtonContainer: document.querySelector("#likeButtonContainer"),
      restaurant: {},
    });
    document.querySelector("#likeButton").dispatchEvent(new Event("click"));
    expect(await FavoriteRestaurantIdb.getAllRestaurants()).toEqual([]);
  });
});
