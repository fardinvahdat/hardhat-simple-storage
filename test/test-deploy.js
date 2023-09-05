const { ethers } = require("hardhat");
const { assert, expect } = require("chai");

describe("SimpleStorage", function () {
  let SimpleStorageFactory;
  let simpleStorage;
  beforeEach(async function () {
    SimpleStorageFactory = await ethers.getContractFactory("SimpleStorage");
    simpleStorage = await SimpleStorageFactory.deploy();
  });

  it("should start with favorite number of 0", async function () {
    const currentValue = await simpleStorage.retrieve();
    const expectedValue = "0";
    //assert
    //expect
    assert.equal(currentValue.toString(), expectedValue);
  });
  it("should update when we call store", async function () {
    const currentValue = await simpleStorage.retrieve();
    const response = await simpleStorage.store("7");
    response.wait(1);
    const updatedValue = await simpleStorage.retrieve();
    assert.notEqual(currentValue.toString(), updatedValue.toString());
  });
});
