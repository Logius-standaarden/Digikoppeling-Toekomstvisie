import { loadRespecWithConfiguration } from "https://logius-standaarden.github.io/publicatie/respec/organisation-config.mjs";

loadRespecWithConfiguration({
  authors: [{
        "company" : "Logius",
        "name" : "Peter Haasnoot",
        "url" : "https://www.logius.nl"
      }
           ],
  editors: [
      {
        "company" : "Logius",
        "name" : "Peter Haasnoot",
        "url" : "https://www.logius.nl"
      }
  ],
  github: "https://github.com/Logius-standaarden/NL-GOV-profile-for-CloudEvents",
  pubDomain: "dk",
  //previousPublishVersion: "1.0",
  publishDate: "2026-10-30",
  publishVersion: "0",
  shortName: "toekomstvisie",
  specStatus: "WV",
  specType: "HR",

  useLogo: false,
  nl_organisationName: "Werkgroep",
});
