import {
  filterByCondition,
  filterByMaxPrice,
  sortBy,
  selectSaleItems
} from '../saleItemSelector';

let state;
beforeAll(() => {
  state = {
    wants: {
      loading: false,
      saleItems: [
        {
          title: 'Sade - The Best Of Sade (2xLP, Comp, RE, Gat)',
          condition_sleeve: 'Near Mint (NM or M-)',
          condition_media: 'Near Mint (NM or M-)',
          seller: 'strat-mangler',
          ships_from: 'Canada',
          price: '$20.00',
          shipping: '\n        + shipping',
          converted_price: '',
          release_link: '/Sade-The-Best-Of-Sade/release/8131475',
          thumbnail: 'https://img.discogs.com/3hacFUMULShjTRzPUWto8EBDsvM=/fit-in/300x300/filters:strip_icc():format(jpeg):mode_rgb():quality(40)/discogs-images/R-8131475-1455731509-9131.jpeg.jpg',
          conditionRating: 7,
          item_only_price: 20,
          suggested_price: 25.4575,
          sale_id: 1061677317,
          sale_link: '/sell/item/1061677317',
          release_id: 8131475,
          amount_diff: -5.4575,
          percent_diff: -0.2143769026809388
        },
        {
          title: 'Sade - The Best Of Sade (2xLP, Comp, RE, Gat)',
          condition_sleeve: 'Mint (M)',
          condition_media: 'Mint (M)',
          seller: 'KopsRecords',
          ships_from: 'Canada',
          price: 'CA$27.99',
          shipping: '\n        + shipping',
          converted_price: 'about $21.05',
          release_link: '/Sade-The-Best-Of-Sade/release/8131475',
          thumbnail: 'https://img.discogs.com/3hacFUMULShjTRzPUWto8EBDsvM=/fit-in/300x300/filters:strip_icc():format(jpeg):mode_rgb():quality(40)/discogs-images/R-8131475-1455731509-9131.jpeg.jpg',
          conditionRating: 8,
          item_only_price: 21.05,
          suggested_price: 28.452499999999997,
          sale_id: 1066295371,
          sale_link: '/sell/item/1066295371',
          release_id: 8131475,
          amount_diff: -7.402499999999996,
          percent_diff: -0.2601704595378261
        },
        {
          title: 'Sade - The Best Of Sade (2xLP, Comp, RE, Gat)',
          condition_sleeve: 'Mint (M)',
          condition_media: 'Near Mint (NM or M-)',
          seller: 'KopsRecords',
          ships_from: 'Canada',
          price: 'CA$27.99',
          shipping: '\n        + shipping',
          converted_price: 'about $21.05',
          release_link: '/Sade-The-Best-Of-Sade/release/8131475',
          thumbnail: 'https://img.discogs.com/3hacFUMULShjTRzPUWto8EBDsvM=/fit-in/300x300/filters:strip_icc():format(jpeg):mode_rgb():quality(40)/discogs-images/R-8131475-1455731509-9131.jpeg.jpg',
          conditionRating: 7,
          item_only_price: 22.22,
          suggested_price: 28.452499999999997,
          sale_id: 1066295371,
          sale_link: '/sell/item/1066295371',
          release_id: 8131475,
          amount_diff: -7.402499999999996,
          percent_diff: -0.2601704595378261
        },
        {
          title: 'Sade - The Best Of Sade (2xLP, Comp, RE, Gat)',
          condition_sleeve: 'Mint (M)',
          condition_media: 'Near Mint (NM or M-)',
          seller: 'KopsRecords',
          ships_from: 'Canada',
          price: 'CA$27.99',
          shipping: '\n        + shipping',
          converted_price: 'about $21.05',
          release_link: '/Sade-The-Best-Of-Sade/release/8131475',
          thumbnail: 'https://img.discogs.com/3hacFUMULShjTRzPUWto8EBDsvM=/fit-in/300x300/filters:strip_icc():format(jpeg):mode_rgb():quality(40)/discogs-images/R-8131475-1455731509-9131.jpeg.jpg',
          conditionRating: 7,
          item_only_price: 23.23,
          suggested_price: 28.452499999999997,
          sale_id: 1066295371,
          sale_link: '/sell/item/1066295371',
          release_id: 8131476,
          amount_diff: -7.402499999999996,
          percent_diff: -0.2601704595378261
        }
      ]
    }
  };
});

describe('filterByCondition', () => {
  it('filters sales items by a provided condition integer ranking (delivered as string)', () => {
    const result = filterByCondition(state.wants.saleItems, '8');
    expect(result).toEqual([{
      title: 'Sade - The Best Of Sade (2xLP, Comp, RE, Gat)',
      condition_sleeve: 'Mint (M)',
      condition_media: 'Mint (M)',
      seller: 'KopsRecords',
      ships_from: 'Canada',
      price: 'CA$27.99',
      shipping: '\n        + shipping',
      converted_price: 'about $21.05',
      release_link: '/Sade-The-Best-Of-Sade/release/8131475',
      thumbnail: 'https://img.discogs.com/3hacFUMULShjTRzPUWto8EBDsvM=/fit-in/300x300/filters:strip_icc():format(jpeg):mode_rgb():quality(40)/discogs-images/R-8131475-1455731509-9131.jpeg.jpg',
      conditionRating: 8,
      item_only_price: 21.05,
      suggested_price: 28.452499999999997,
      sale_id: 1066295371,
      sale_link: '/sell/item/1066295371',
      release_id: 8131475,
      amount_diff: -7.402499999999996,
      percent_diff: -0.2601704595378261
    }]);
  });
});

describe('filterByMaxPrice', () => {
  it('returns a filtered array of sales items less than or equal to a given maximum price', () => {
    const filteredByMaxPrice = [
      {
        title: 'Sade - The Best Of Sade (2xLP, Comp, RE, Gat)',
        condition_sleeve: 'Near Mint (NM or M-)',
        condition_media: 'Near Mint (NM or M-)',
        seller: 'strat-mangler',
        ships_from: 'Canada',
        price: '$20.00',
        shipping: '\n        + shipping',
        converted_price: '',
        release_link: '/Sade-The-Best-Of-Sade/release/8131475',
        thumbnail: 'https://img.discogs.com/3hacFUMULShjTRzPUWto8EBDsvM=/fit-in/300x300/filters:strip_icc():format(jpeg):mode_rgb():quality(40)/discogs-images/R-8131475-1455731509-9131.jpeg.jpg',
        conditionRating: 7,
        item_only_price: 20,
        suggested_price: 25.4575,
        sale_id: 1061677317,
        sale_link: '/sell/item/1061677317',
        release_id: 8131475,
        amount_diff: -5.4575,
        percent_diff: -0.2143769026809388
      },
      {
        title: 'Sade - The Best Of Sade (2xLP, Comp, RE, Gat)',
        condition_sleeve: 'Mint (M)',
        condition_media: 'Mint (M)',
        seller: 'KopsRecords',
        ships_from: 'Canada',
        price: 'CA$27.99',
        shipping: '\n        + shipping',
        converted_price: 'about $21.05',
        release_link: '/Sade-The-Best-Of-Sade/release/8131475',
        thumbnail: 'https://img.discogs.com/3hacFUMULShjTRzPUWto8EBDsvM=/fit-in/300x300/filters:strip_icc():format(jpeg):mode_rgb():quality(40)/discogs-images/R-8131475-1455731509-9131.jpeg.jpg',
        conditionRating: 8,
        item_only_price: 21.05,
        suggested_price: 28.452499999999997,
        sale_id: 1066295371,
        sale_link: '/sell/item/1066295371',
        release_id: 8131475,
        amount_diff: -7.402499999999996,
        percent_diff: -0.2601704595378261
      }
    ];
    const result = filterByMaxPrice(filteredByMaxPrice, 20);
    expect(result).toEqual([{
      title: 'Sade - The Best Of Sade (2xLP, Comp, RE, Gat)',
      condition_sleeve: 'Near Mint (NM or M-)',
      condition_media: 'Near Mint (NM or M-)',
      seller: 'strat-mangler',
      ships_from: 'Canada',
      price: '$20.00',
      shipping: '\n        + shipping',
      converted_price: '',
      release_link: '/Sade-The-Best-Of-Sade/release/8131475',
      thumbnail: 'https://img.discogs.com/3hacFUMULShjTRzPUWto8EBDsvM=/fit-in/300x300/filters:strip_icc():format(jpeg):mode_rgb():quality(40)/discogs-images/R-8131475-1455731509-9131.jpeg.jpg',
      conditionRating: 7,
      item_only_price: 20,
      suggested_price: 25.4575,
      sale_id: 1061677317,
      sale_link: '/sell/item/1061677317',
      release_id: 8131475,
      amount_diff: -5.4575,
      percent_diff: -0.2143769026809388
    }]);
  });
});

describe('getSorted function', () => {
  it('sorts an array by the provided key string', () => {
    const array = [{ someKey: 0 }, { someKey: -1 }, { someKey: 1 }];
    const sorted = sortBy(array, 'someKey');
    expect(sorted).toEqual([{ someKey: -1 }, { someKey: 0 }, { someKey: 1 }]);
  });
});

describe('selectSaleItem bestOnly = false', () => {
  it('returns an array of sales items after filtering and sorting', () => {
    const result = selectSaleItems(state, 'item_only_price', '8', 30, false);
    expect(result).toEqual([{
      title: 'Sade - The Best Of Sade (2xLP, Comp, RE, Gat)',
      condition_sleeve: 'Mint (M)',
      condition_media: 'Mint (M)',
      seller: 'KopsRecords',
      ships_from: 'Canada',
      price: 'CA$27.99',
      shipping: '\n        + shipping',
      converted_price: 'about $21.05',
      release_link: '/Sade-The-Best-Of-Sade/release/8131475',
      thumbnail: 'https://img.discogs.com/3hacFUMULShjTRzPUWto8EBDsvM=/fit-in/300x300/filters:strip_icc():format(jpeg):mode_rgb():quality(40)/discogs-images/R-8131475-1455731509-9131.jpeg.jpg',
      conditionRating: 8,
      item_only_price: 21.05,
      suggested_price: 28.452499999999997,
      sale_id: 1066295371,
      sale_link: '/sell/item/1066295371',
      release_id: 8131475,
      amount_diff: -7.402499999999996,
      percent_diff: -0.2601704595378261
    }]);
  });
});

describe('selectSaleItems bestOnly = true', () => {
  it('returns an array of sales items after filtering and sorting, only one item per release', () => {
    const result = selectSaleItems(state, 'item_only_price', '0', 30, true);
    //console.log('result', result);
    expect(result).toEqual([{
      title: 'Sade - The Best Of Sade (2xLP, Comp, RE, Gat)',
      condition_sleeve: 'Near Mint (NM or M-)',
      condition_media: 'Near Mint (NM or M-)',
      seller: 'strat-mangler',
      ships_from: 'Canada',
      price: '$20.00',
      shipping: '\n        + shipping',
      converted_price: '',
      release_link: '/Sade-The-Best-Of-Sade/release/8131475',
      thumbnail: 'https://img.discogs.com/3hacFUMULShjTRzPUWto8EBDsvM=/fit-in/300x300/filters:strip_icc():format(jpeg):mode_rgb():quality(40)/discogs-images/R-8131475-1455731509-9131.jpeg.jpg',
      conditionRating: 7,
      item_only_price: 20,
      suggested_price: 25.4575,
      sale_id: 1061677317,
      sale_link: '/sell/item/1061677317',
      release_id: 8131475,
      amount_diff: -5.4575,
      percent_diff: -0.2143769026809388
    },
    {
      title: 'Sade - The Best Of Sade (2xLP, Comp, RE, Gat)',
      condition_sleeve: 'Mint (M)',
      condition_media: 'Near Mint (NM or M-)',
      seller: 'KopsRecords',
      ships_from: 'Canada',
      price: 'CA$27.99',
      shipping: '\n        + shipping',
      converted_price: 'about $21.05',
      release_link: '/Sade-The-Best-Of-Sade/release/8131475',
      thumbnail: 'https://img.discogs.com/3hacFUMULShjTRzPUWto8EBDsvM=/fit-in/300x300/filters:strip_icc():format(jpeg):mode_rgb():quality(40)/discogs-images/R-8131475-1455731509-9131.jpeg.jpg',
      conditionRating: 7,
      item_only_price: 23.23,
      suggested_price: 28.452499999999997,
      sale_id: 1066295371,
      sale_link: '/sell/item/1066295371',
      release_id: 8131476,
      amount_diff: -7.402499999999996,
      percent_diff: -0.2601704595378261
    }]);
  });
});
