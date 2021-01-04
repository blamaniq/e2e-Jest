/**
 * kolobok
 * @param {string} name
 * @returns {string}
 */

export const kolobok = (kol) => {
  if (typeof kol === 'string'
    && (kol !== ' ')) {
    switch (kol) {
      case 'grandfather':
        return ('kolobok ran away from grandfather');
      case 'grandmother':
        return ('kolobok ran away from grandmother');
      case 'fox':
        return ('kolobok was eaten by a fox');
      default:
        throw new Error();
    }
  } else { throw new Error(); }
};

/**
 * newYear
 * @param {string} name
 * @returns {string}
 */
export const newYear = (pers) => {
  if (typeof pers === 'string'
    && (pers !== ' ')) {
    switch (pers) {
      case 'Ded Moroz':
        return (`${pers}! ${pers}! ${pers}!`);
      case 'Snegurochka':
        return (`${pers}! ${pers}! ${pers}!`);
      default:
        throw new Error();
    }
  } else { throw new Error(); }
};
