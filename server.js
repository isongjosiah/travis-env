
function sleep(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}

async function main() {
  while(true) {
    console.log("Microservices rock!");
    const fav = process.env.FAVORITE_FOOD
    console.log(`my favorite food is ${fav}`)
    await sleep(5000);
  }
}

main();
