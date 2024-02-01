"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.campaigns = exports.profiles = exports.accounts = void 0;
var fs = require("fs");
var path = require("path");
var shortid = require("shortid");
var accounts = [];
exports.accounts = accounts;
var profiles = [];
exports.profiles = profiles;
var campaigns = [];
exports.campaigns = campaigns;
var startDate = "2020-01-01";
var endDate = "2022-12-31";
var NUM_FAKE_ACCOUNTS = 60;
var dbFilePath = path.join(__dirname, 'db.json');
var writeDataToFile = function (data) {
    fs.writeFileSync(dbFilePath, JSON.stringify(data, null, 2), 'utf8');
};
writeDataToFile({
    accounts: [],
    profiles: [],
    campaigns: []
});
var generateFakeToken = function () {
    var characters = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
    var tokenLength = 32;
    var fakeToken = "";
    for (var i = 0; i < tokenLength; i++) {
        var randomIndex = Math.floor(Math.random() * characters.length);
        fakeToken += characters.charAt(randomIndex);
    }
    return fakeToken;
};
var generateRandomDate = function (start, end) {
    var startDate = new Date(start);
    var endDate = new Date(end);
    var randomTimestamp = startDate.getTime() +
        Math.random() * (endDate.getTime() - startDate.getTime());
    var randomDate = new Date(randomTimestamp);
    return randomDate.toISOString().split("T")[0];
};
var generateRandomEmail = function () {
    var domains = [
        "gmail.com",
        "yahoo.com",
        "hotmail.com",
        "example.com",
        "test.com",
    ];
    var randomDomain = domains[Math.floor(Math.random() * domains.length)];
    var usernameLength = Math.floor(Math.random() * 10) + 5;
    var randomUsername = "";
    var possibleCharacters = "abcdefghijklmnopqrstuvwxyz0123456789";
    for (var i = 0; i < usernameLength; i++) {
        var randomIndex = Math.floor(Math.random() * possibleCharacters.length);
        randomUsername += possibleCharacters.charAt(randomIndex);
    }
    return "".concat(randomUsername, "@").concat(randomDomain);
};
var generateRandomCountry = function () {
    var countries = ["USA", "Canada", "UK", "Germany", "France", "Australia"];
    return countries[Math.floor(Math.random() * countries.length)];
};
var generateRandomMarketplace = function () {
    var marketplaces = ["Amazon", "eBay", "Shopify", "Etsy", "Walmart"];
    return marketplaces[Math.floor(Math.random() * marketplaces.length)];
};
var campaignsCount = function () {
    var maxCampaignsPerProfile = 40;
    var minCampaignsPerProfile = 30;
    var numberOfCampaigns = Math.floor(Math.random() * (maxCampaignsPerProfile - minCampaignsPerProfile + 1)) + minCampaignsPerProfile;
    return numberOfCampaigns;
};
var generateCampaign = function (accountId, profileId) {
    var campaign = {
        account_id: accountId,
        profile_id: profileId,
        campaignId: shortid.generate(),
        clicks: Math.floor(Math.random() * 1000),
        cost: Math.random() * 1000,
        date: generateRandomDate(startDate, endDate),
    };
    campaigns.push(campaign);
};
var profilesCount = function () {
    var maxProfilesPerAccount = 20;
    var minProfilesPerAccount = 10;
    var numberOfProfiles = Math.floor(Math.random() * (maxProfilesPerAccount - minProfilesPerAccount + 1)) + minProfilesPerAccount;
    return numberOfProfiles;
};
var generateProfile = function (accountId, campaignsCount) {
    var profile = {
        profileId: shortid.generate(),
        account_id: accountId,
        country: generateRandomCountry(),
        marketplace: generateRandomMarketplace(),
    };
    profiles.push(profile);
    for (var i = 0; i < campaignsCount; i++) {
        generateCampaign(accountId, profile.profileId);
    }
};
var generateAccount = function (profilesCount, campaignsCount) {
    var account = {
        accountId: shortid.generate(),
        email: generateRandomEmail(),
        authToken: generateFakeToken(),
        creationDate: generateRandomDate(startDate, endDate),
    };
    accounts.push(account);
    for (var i = 0; i < profilesCount; i++) {
        generateProfile(account.accountId, campaignsCount);
    }
};
for (var i = 0; i < NUM_FAKE_ACCOUNTS; i++) {
    generateAccount(profilesCount(), campaignsCount());
}
writeDataToFile({ accounts: accounts, profiles: profiles, campaigns: campaigns });
