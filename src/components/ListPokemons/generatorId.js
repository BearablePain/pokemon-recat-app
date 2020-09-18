// import React from 'react';
let id = 0;
const getId = () => {
  function* GeneratorId() {
    while (true) {
      yield `${++id}${String.fromCharCode(~~(Math.random() * (90 - 65)) + 65)}`;
    }
  }
  return GeneratorId().next().value;
};

export default getId;
