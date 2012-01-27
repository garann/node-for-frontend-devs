(function(ns) {
  ns.modul = function() {
    console.log("works!");
  };
  return ns;
}(typeof exports === "undefined" ? myapp : exports));