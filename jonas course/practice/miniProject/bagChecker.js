function bagChecker(...tools) {
  const truthyTool = new Map([
    ["knife", "You Have Knif You Sould Get It From The Bag"],
    ["spray", "You Have Spray You Sould Get It From The Bag"],
    ["gun", "You Have Gun You Sould Get It From The Bag"],
  ]);

  for (let tool of tools) {
    for (let [key, value] of truthyTool) {
      if (tool == key) {
        console.log(truthyTool.get(tool));
        break;
      } else {
        continue;
      }
    }
    console.log("Good Bye Sir");
  }
}

bagChecker("del");
