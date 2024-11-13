/*

*/

function runner() {
  try {
    console.log("Hello");
    throw new Error("A major issue has occured");
    console.log("World");
  } catch (e) {
    console.log("---catch---");
    console.log(e);
  } finally {
    console.log("---finally---");
  }
}

runner();
