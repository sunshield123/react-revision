const heading = React.createElement(
  "h1",
  { id: "heading" },
  "I am writing from react"
);

// Where heading is not h1 tag but object is react element
/**
 * If we have more than nested html - we create element one inside the other
 * And then when we have multiple children - we create element inside the array
 * But in react we should have only one parent object that will be passed inside the object
 * we have something called as Key- will check it later
 */

const heading1 = React.createElement("h1", { id: "heading" }, [
  React.createElement("h1", { id: "heading" }, "I am writing from react"),
  React.createElement("h1", { id: "heading" }, "I am writing from react"),
]);

console.log(heading);

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(heading);
