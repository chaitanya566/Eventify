export const downloadData = (data) => {
  const jsonString = JSON.stringify(data, null, 2); // Convert data to JSON string with pretty print
  const blob = new Blob([jsonString], { type: "application/json" });
  const url = URL.createObjectURL(blob);

  const a = document.createElement("a"); // Create an anchor element
  a.href = url;
  a.download = "tasks.json"; // Specify the file name
  document.body.appendChild(a); // Append the anchor to the body
  a.click(); // Programmatically click the anchor to trigger the download
  document.body.removeChild(a); // Remove the anchor from the body
  URL.revokeObjectURL(url); // Clean up the URL object
};
