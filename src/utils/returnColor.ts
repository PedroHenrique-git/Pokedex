export default function returnColor(type: string): string {
  let color = '';
  if (type === 'bug') color = '#3c9950';
  if (type === 'dark') color = '#595978';
  if (type === 'dragon') color = '#62cad9';
  if (type === 'electric') color = '#e2e32b';
  if (type === 'fairy') color = '#961a45';
  if (type === 'fighting') color = '#994025';
  if (type === 'fire') color = '#ab1f24';
  if (type === 'flying') color = '#4a677d';
  if (type === 'ghost') color = '#33336b';
  if (type === 'grass') color = '#147b3d';
  if (type === 'ground') color = '#6e491f';
  if (type === 'ice') color = '#86d2f5';
  if (type === 'normal') color = '#75525c';
  if (type === 'poison') color = '#5e2d89';
  if (type === 'psychic') color = '#a52a6c';
  if (type === 'rock') color = '#48190b';
  if (type === 'steel') color = '#60756e';
  if (type === 'water') color = '#1552e1';
  return color;
}
