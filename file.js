const heading = React.createElement("h1", {}, [React.createElement("h2", {}, "array 1"),React.createElement("h1",{},"array 2"),]);
console.log(heading);
const root  = ReactDOM.createRoot(document.getElementById("root"));
root.render(heading)