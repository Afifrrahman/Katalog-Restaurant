// eslint-disable-next-line no-undef
Feature('Liking Restaurant');

// eslint-disable-next-line no-undef
Before(({ I }) => {
  I.amOnPage('/#/favorite');
  I.waitForElement('#restaurants', 10); // Menunggu elemen dengan id "restaurants" muncul
});

const emptyFavoriteRestoText = 'Tidak ada restoran yang disukai.';

// eslint-disable-next-line no-undef
Scenario('showing empty liked restaurants', ({ I }) => {
  I.see(emptyFavoriteRestoText, '.restaurants'); // Memeriksa pesan "Tidak ada restoran yang disukai."
});

// eslint-disable-next-line no-undef
Scenario('liking one restaurant', async ({ I }) => {
  I.amOnPage('/');

  I.waitForElement('.list-item', 10); // Menunggu elemen dengan kelas "list-item" muncul

  // eslint-disable-next-line no-undef
  I.click(locate('.list-item a').first()); // Mengklik restoran pertama

  I.waitForElement('#likeButton', 10); // Menunggu tombol like muncul
  I.click('#likeButton'); // Menyukai restoran

  I.amOnPage('/#/favorite');
  I.waitForElement('.list-item', 10); // Menunggu elemen dengan kelas "list-item" muncul
  I.seeElement('.list-item'); // Memeriksa apakah ada restoran yang disukai
});

// eslint-disable-next-line no-undef
Scenario('unliking one restaurant', async ({ I }) => {
  I.amOnPage('/');

  I.waitForElement('.list-item', 10); // Menunggu elemen dengan kelas "list-item" muncul

  // eslint-disable-next-line no-undef
  I.click(locate('.list-item a').first()); // Mengklik restoran pertama

  I.waitForElement('#likeButton', 10); // Menunggu tombol like muncul
  I.click('#likeButton'); // Menyukai restoran

  I.amOnPage('/#/favorite');
  I.waitForElement('.list-item', 10); // Menunggu elemen dengan kelas "list-item" muncul

  // eslint-disable-next-line no-undef
  I.click(locate('.list-item a').first()); // Mengklik restoran pertama di halaman favorit

  I.waitForElement('#likeButton', 10); // Menunggu tombol like muncul
  I.click('#likeButton'); // Membatalkan suka restoran

  I.amOnPage('/#/favorite');
  I.waitForElement('.restaurants', 10); // Menunggu elemen dengan kelas "restaurants" muncul
  I.see(emptyFavoriteRestoText, '.restaurants'); // Memeriksa pesan "Tidak ada restoran yang disukai."
});
