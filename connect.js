/*const EventEmitter = require ('events');


class Love extends EventEmitter{
 log(message)
{
  console.log('thanku for giving me this opporunity');
  // raise a event
  this.emit('MeesageLogged', { ID:1, Game : 'PUBG'});
}
  }

module.exports = Love;
*/


function log (req,res,next){
  console.log('logger...');
  next();
};

module.exports = log;

