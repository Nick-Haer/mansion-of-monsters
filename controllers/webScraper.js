const cheerio = require('cheerio');

const axios = require('axios');

//all data credit to https://cryptidz.fandom.com/wiki/Cryptid_Wiki

async function monsterHunter() {
  const monstersArr = [];

  try {
    await axios
      .get('https://cryptidz.fandom.com/wiki/Category:Cryptids')
      .then(response => {
        const $ = cheerio.load(response.data);
        $('a.category-page__member-link').each((i, element) => {
          monstersArr.push(
            'https://cryptidz.fandom.com' + $(element).attr('href')
          );
          console.log($(element).attr('href'));
        });

        monstersArr.forEach(monster => console.log(monster));
      });
  } catch (err) {}
}

monsterHunter();
