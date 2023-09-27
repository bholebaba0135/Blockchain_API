const Block=require('./block');
describe('Block',()=>{
    let data,lastBlock,block;
    beforeEach(()=>{
        //removed const
         data='bar';
         lastBlock=Block.genesis();
         block =Block.mineBlock(lastBlock,data);
    });
    it('sets the `data` to match the input',()=>{
        expect(block.data).toEqual(data);//expects block instance created has data attribute that matches data input
    });
    it('sets the `lastHash` to match the hash of the last block',()=>{
        expect(block.lastHash).toEqual(lastBlock.hash);//try changing to something else

    });
});