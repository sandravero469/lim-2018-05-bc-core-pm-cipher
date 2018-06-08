describe('cipher', () => {

  it('debería ser un objeto', () => {
    assert.equal(typeof cipher, 'object');
  });

  describe('cipher.encode', () => {

    it('debería ser una función', () => {
      assert.equal(typeof cipher.encode, 'function');

    });



    it('debería retornar "HIJKLMNOPQRSTUVWXYZABCDEFG" para "ABCDEFGHIJKLMNOPQRSTUVWXYZ" con offest 33',()=>{ let resultado = cipher.encode (33,"ABCDEFGHIJKLMNOPQRSTUVWXYZ");

    assert.equal(resultado,"HIJKLMNOPQRSTUVWXYZABCDEFG");
    });
  });


  describe('cipher.decode', () => {

    it('debería ser una función', () => {
      assert.equal(typeof cipher.decode, "function");
    });

    it('debería retornar "ABCDEFGHIJKLMNOPQRSTUVWXYZ" para "HIJKLMNOPQRSTUVWXYZABCDEFG" con offest 33',()=>{ let resultado = cipher.decode (33,"HIJKLMNOPQRSTUVWXYZABCDEFG");

    assert.equal(resultado,"ABCDEFGHIJKLMNOPQRSTUVWXYZ");
  });
});

  describe('cipher.createCipherWithOffset', () => {

    it('debería ser una función', () => {
      assert.equal(typeof cipher.createCipherWithOffset, 'function');
    });

    it('debería retornar un objeto con dos funciones (encode y decode) con offset fijado',()=>{

assert.equal(typeof cipher.createCipherWithOffset(33), "object" );
assert.isFunction(cipher.createCipherWithOffset(33).encode);
assert.isFunction(cipher.createCipherWithOffset(33).decode);
   });
it('debería retornar "HIJKLMNOPQRSTUVWXYZABCDEFG" para "ABCDEFGHIJKLMNOPQRSTUVWXYZ" con offest 33',()=> {
  assert.equal(cipher.createCipherWithOffset(33).encode("ABCDEFGHIJKLMNOPQRSTUVWXYZ"),"HIJKLMNOPQRSTUVWXYZABCDEFG")
});
it('debería retornar "ABCDEFGHIJKLMNOPQRSTUVWXYZ" para "HIJKLMNOPQRSTUVWXYZABCDEFG" con offest 33',()=> {
  assert.equal(cipher.createCipherWithOffset(33).decode("HIJKLMNOPQRSTUVWXYZABCDEFG"),"ABCDEFGHIJKLMNOPQRSTUVWXYZ")
});
});
});
