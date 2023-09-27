const Block=require('./blockchain/block');
//To test block class
//const block=new Block('foo','bar','zoo','baz');
//console.log(block.toString());
//to test genesis function
console.log(Block.genesis().toString());
//to test mineBlock function
const fooBlock=Block.mineBlock(Block.genesis(),'foo');
console.log(fooBlock.toString());