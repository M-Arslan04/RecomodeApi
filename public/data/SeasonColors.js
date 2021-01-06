const ClearWinter = [
  "#FEFEFE",
  "#C8D8EB",
  "#F395C7",
  "#00A3E1",
  "#0096CA",
  "#0087AE",
  "#0086D6",
  "#0077C8",
  "#0057B8",
  "#004B87",
  "#003DA5",
  "#2D389B",
  "#87189D",
  "#A51890",
  "#AA0061",
  "#C6007E",
  "#E00885",
  "#E3006D",
  "#E40046",
  "#CE0037",
  "#C724B1",
  "#963CBD",
  "#009775",
  "#00594C",
  "#131413",
];
const CoolWinter = [
  "#FEFEFE",
  "#99D6EA",
  "#F8E59A",
  "#F395C7",
  "#59CBE8",
  "#9BB8D3",
  "#00A3E1",
  "#808286",
  "#009775",
  "#00B0B9",
  "#0082BA",
  "#0086D6",
  "#0072CE",
  "#0057B8",
  "#004B87",
  "#484A51",
  "#84329B",
  "#963CBD",
  "#C724B1",
  "#DA1884",
  "#E3006D",
  "#CE0037",
  "#AA0061",
  "#890C58",
  "#131413",
];
const DeepWinter = [
  "#131413",
  "#B8C9E1",
  "#0096CA",
  "#0086D6",
  "#007FA3",
  "#00617F",
  "#0057B8",
  "#004B87",
  "#84329B",
  "#963CBD",
  "#C724B1",
  "#DA1884",
  "#E3006D",
  "#CE0037",
  "#AA0061",
  "#991E68",
  "#890C58",
  "#5C068C",
  "#009775",
  "#009F4D",
  "#00594C",
  "#002D72",
  "#001E62",
  "#131413",
  "#341902",
];
const SoftSummer = [
  "#F1BDC8",
  "#FFA3B5",
  "#9BCBEB",
  "#6DCDB8",
  "#9CAF88",
  "#A39382",
  "#C4A4A7",
  "#D592AA",
  "#F65275",
  "#808286",
  "#A277A6",
  "#A05EB5",
  "#A15A95",
  "#86647A",
  "#7C6992",
  "#57728B",
  "#5C82A5",
  "#779FB5",
  "#779FB5",
  "#9BB8D3",
  "#71C5E8",
  "#A7A2C3",
  "#9595D2",
  "#009CA6",
  "#484A51",
  "#A83D72",
];
const CoolSummer = [
  "#f395c7",
  "#c964cf",
  "#00a9e0",
  "#963cbd",
  "#ef60a3",
  "#bcbdbe",
  "#a277a6",
  "#71c5e8",
  "#93328e",
  "#007681",
  "#c4a4a7",
  "#808286",
  "#57728b",
  "#ac145a",
  "#006f62",
  "#f57eb6",
  "#00a376",
  "#0077c8",
  "#bf0d3e",
  "#484a51",
  "#e277cd",
  "#00b0b9",
  "#7965b2",
  "#e31c79",
  "#003057",
];
const SeasonColors = () => {
  let data = {
    ClearWinter,
    CoolWinter,
    DeepWinter,
    SoftSummer,
    CoolSummer,
  };
  return data;
};
module.exports = SeasonColors;