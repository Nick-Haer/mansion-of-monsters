const router = express.Router();

import monstercontroller from '../../controllers/monsterController';

router.route('/getRandom').get(monstercontroller.getAMonster);
