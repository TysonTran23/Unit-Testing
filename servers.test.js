describe("Servers test (with setup and tear-down)", function () {
  beforeEach(function () {
    // initialization logic
    serverNameInput.value = 'Alice';
  });

  it('should add a new server to allServers on submitServerInfo()', function () {
    submitServerInfo();

    expect(Object.keys(allServers).length).toEqual(1);
    expect(allServers['server' + serverId].serverName).toEqual('Alice');
  });

//Can't add a server if the input is empty
it('should not add another server if the server input is empty', function() {
  serverNameInput.value = '';
  submitServerInfo();

  expect(Object.keys(allServers).length).toEqual(0);
});

it('Check to see if the td innerText is equal to the input of the form', function() {
  // serverNameInput.value = 'Alice';
  submitServerInfo();
  updateServerTable();
  let td = document.querySelector('#serverTable tbody tr td')
  expect(td.innerText).toEqual('Alice');

})

  afterEach(function () {
    // teardown logic
    serverTbody.innerHTML = "";
    allServers = {};
    serverId = 0;
  });
});
