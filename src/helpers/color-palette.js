// https://github.com/telegramdesktop/tdesktop/blob/dcdaee3db2a5347bb0468599d920953558259ac6/Telegram/Resources/colors.palette#L283-L309

const palette = {
  historyPeer1NameFg: '#c03d33', // red group member name
  historyPeer1UserpicBg: '#e17076', // red userpic background
  historyPeer2NameFg: '#4fad2d', // green group member name
  historyPeer2UserpicBg: '#7bc862', // green userpic background
  historyPeer3NameFg: '#d09306', // yellow group member name
  historyPeer3UserpicBg: '#e5ca77', // yellow userpic background
  historyPeer4NameFg: '#168acd', // blue group member name
  historyPeer4UserpicBg: '#65aadd', // blue userpic background
  historyPeer5NameFg: '#8544d6', // purple group member name
  historyPeer5UserpicBg: '#a695e7', // purple userpic background
  historyPeer6NameFg: '#cd4073', // pink group member name
  historyPeer6UserpicBg: '#ee7aae', // pink userpic background
  historyPeer7NameFg: '#2996ad', // sea group member name
  historyPeer7UserpicBg: '#6ec9cb', // sea userpic background
  historyPeer8NameFg: '#ce671b', // orange group member name
  historyPeer8UserpicBg: '#faa774', // orange userpic background
}

const colorsNameFg = []
const colorsUserpicBg = []

Object.keys(palette).sort().forEach((name) => {
  if (name.endsWith('NameFg')) {
    colorsNameFg.push(palette[name])
  } else if (name.endsWith('UserpicBg')) {
    colorsUserpicBg.push(palette[name])
  }
})

const colorsCount = colorsNameFg.length
const colorsIndexes = [...Array(colorsCount).keys()]  // 0, 1, 2...

// Shuffle colors
colorsIndexes.sort(() => Math.random() - 0.5)

export default {
  colorsNameFg,
  colorsUserpicBg,
  colorsCount,
  colorsIndexes,
}
