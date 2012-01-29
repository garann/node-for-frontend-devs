(function(ns) {
  ns.modul = function() {
    console.log("works!");
  };
  return ns;
}((typeof process !== "undefined" && process.title === "node") ? exports : myapp));