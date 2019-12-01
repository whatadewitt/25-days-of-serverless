const DREIDEL = ["נ", "ג", "ה", "ש"];
const length = DREIDEL.length;

module.exports = async function(context, req) {
  const rand = Math.floor(Math.random() * length);
  context.res = { body: DREIDEL[rand] };
};
