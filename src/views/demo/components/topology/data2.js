export const data = [
  {
    id: '1',
    shape: 'class',
    name: ['工程1'],
    budget: ['预算'],
    number: ['100亿'],

    position: {
      x: 300,
      y: 40
    }
  },
  {
    id: '2',
    shape: 'class',
    name: ['子工程1-1'],
    budget: ['预算'],
    number: ['80亿']
    // "position": {
    //   "x": 200,
    //   "y": 200
    // }
  },
  {
    id: '3',
    shape: 'extends',
    source: '1',
    target: '2'
  },
  {
    id: '4',
    shape: 'class',
    name: ['子工程1-2'],
    budget: ['预算'],
    number: ['20亿']
    // "position": {
    //   "x": 400,
    //   "y": 200
    // }
  },
  {
    id: '5',
    shape: 'extends',
    source: '1',
    target: '4'
  },
  {
    id: '6',
    shape: 'class',
    name: ['子工程1-2-1'],
    budget: ['预算'],
    number: ['10亿']
    // "position": {
    //   "x": 400,
    //   "y": 350
    // }
  },
  {
    id: '7',
    shape: 'extends',
    source: '4',
    target: '6'
  },
  {
    id: '8',
    shape: 'class',
    name: ['子工程1-2-1'],
    budget: ['预算'],
    number: ['10亿']
    // "position": {
    //   "x": 400,
    //   "y": 350
    // }
  },
  {
    id: '9',
    shape: 'extends',
    source: '1',
    target: '8'
  },
  {
    id: '10',
    shape: 'class',
    name: ['子工程1-2-1'],
    budget: ['预算'],
    number: ['10亿']
    // "position": {
    //   "x": 400,
    //   "y": 350
    // }
  },
  {
    id: '11',
    shape: 'extends',
    source: '8',
    target: '10'
  },
  {
    id: '12',
    shape: 'class',
    name: ['子工程1-2-1'],
    budget: ['预算'],
    number: ['10亿']
    // "position": {
    //   "x": 400,
    //   "y": 350
    // }
  },
  {
    id: '13',
    shape: 'extends',
    source: '8',
    target: '12'
  }
]
