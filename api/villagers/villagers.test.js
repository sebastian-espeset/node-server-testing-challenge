const Villagers = require("./villagers-model");
const db = require("../../data/db-config");

const finn={
    name:'finn',
    job:'hero'
};
const jake={
    name:'jake the dog',
    job:'hero'
};

it("working in the correct environment",()=>{
    expect(process.env.DB_env).toBe("testing")
});

beforeAll(async () => {
    await db.migrate.rollback();
    await db.migrate.latest();
  });