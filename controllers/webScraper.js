const cheerio = require('cheerio');

const axios = require('axios');

const { dbConnector, Monster } = require('../models/Monster');

//all data credit to https://cryptidz.fandom.com/wiki/Cryptid_Wiki

async function monsterHunter() {
  await dbConnector();
  const monstersArr = [];
  const monsterMash = [];

  try {
    await axios
      .get('https://cryptidz.fandom.com/wiki/Category:Cryptids')
      .then(response => {
        const $ = cheerio.load(response.data);
        $('a.category-page__member-link').each((i, element) => {
          monstersArr.push(
            'https://cryptidz.fandom.com' + $(element).attr('href')
          );
          //   console.log($(element).attr('href'));
        });

        for (i = 0; i < 200; i++) {
          monsterMash.push(axios.get(monstersArr[i]));
        }
        console.log(monsterMash.length);
        monsterMash.forEach(prom => console.log(prom));
      });

    Promise.all(monsterMash).then(monsterData => {
      let counter = 0;
      console.log(monsterData.length);
      monsterData
        .forEach(monsterInfo => {
          const $ = cheerio.load(monsterInfo.data);
          let name = $('h1.page-header__title').text();
          let image = $('a.image-thumbnail')
            .children('img')
            .attr('src');
          let link = monstersArr[counter];
          let summary = $('div.mw-content-ltr')
            .children('p')
            .text();
          counter++;
          Monster.create({
            name,
            image,
            link,
            summary,
          });
        })
        .catch(err => console.log(err));
    });
  } catch (err) {
    throw err;
  }
}

// monsterHunter();
