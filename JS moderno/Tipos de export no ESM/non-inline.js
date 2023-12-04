function group() {
  console.log("Export nomeado non-inline (agrupado)");
}

function exportDefault() {
  console.log("Export default non-inline");
}

export { group };
export default exportDefault;
