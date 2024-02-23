//XXX maybe move page context to database

const text = {
  dictionary: dictionariesPage(),
  settings: settingsPage(),
};

export default function getPlugPageContent(pageName) {
  return text[pageName];
}

function dictionariesPage() {
  return (
    <>
      <p>Home page of the directories</p>
    </>
  );
}

function settingsPage() {
  return (
    <>
      <p>Home page of the settings</p>
    </>
  );
}
