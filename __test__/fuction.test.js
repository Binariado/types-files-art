const f=require("../src/typesFilesArt");
describe("mensagge",()=>{
    it("rename ok",()=>{
        expect(f.rename({test:{}})).toBe("ok");
    })
})