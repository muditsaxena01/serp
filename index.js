var defaultEntries = [{"title":"Thor","link":"https://comicvine.gamespot.com/thor/4005-2268/","desc":"Thor Odinson is the All-father of Asgard /God of Thunder, offspring of All-Father Odin & the Elder Earth-Goddess Gaea. Combining the powers of both realms makes him an elder-god hybrid and a being of limitless potential. Armed with his enchanted Uru hammer Mjolnir which helps him to channel his godly energies. The mightiest and the most beloved warrior in all of Asgard, a staunch ally for good and one of the most powerful beings in the multiverse/omniverse. Thor is also a founding member of the Avengers.","indexed":"Thor Thor Odinson is the All father of Asgard  God of Thunder  offspring of All Father Odin   the Elder Earth Goddess Gaea  Combining the powers of both realms makes him an elder god hybrid and a being of limitless potential  Armed with his enchanted Uru hammer Mjolnir which helps him to channel his godly energies  The mightiest and the most beloved warrior in all of Asgard  a staunch ally for good and one of the most powerful beings in the multiverse omniverse  Thor is also a founding member of the Avengers"},{"title":"Iron Man","link":"https://comicvine.gamespot.com/iron-man/4005-1455/","desc":"Tony Stark was the arrogant son of wealthy, weapon manufacturer Howard Stark. Tony cared only about himself, but he would have a change of heart after he was kidnapped by terrorists and gravely injured. Pressured to create a weapon of mass destruction, Stark instead created a suit of armor powerful enough for him to escape. Tony uses his vast resources and intellect to make the world a better place as The Invincible Iron Man. Stark's super hero identity led him to become a founding member of the Avengers.","indexed":"Iron Man Tony Stark was the arrogant son of wealthy  weapon manufacturer Howard Stark  Tony cared only about himself  but he would have a change of heart after he was kidnapped by terrorists and gravely injured  Pressured to create a weapon of mass destruction  Stark instead created a suit of armor powerful enough for him to escape  Tony uses his vast resources and intellect to make the world a better place as The Invincible Iron Man  Stark s super hero identity led him to become a founding member of the Avengers"},{"title":"SpiderMan","link":"https://comicvine.gamespot.com/spider-man/4005-1443/","desc":"Peter Parker was bitten by a radioactive spider as a teenager, granting him spider-like powers. After the death of his Uncle Ben, Peter learned that \"with great power, comes great responsibility\". Swearing to always protect the innocent from harm, Peter Parker became Spider-Man.","indexed":"SpiderMan Peter Parker was bitten by a radioactive spider as a teenager  granting him spider like powers  After the death of his Uncle Ben  Peter learned that  with great power  comes great responsibility   Swearing to always protect the innocent from harm  Peter Parker became Spider Man"},{"title":"Hulk","link":"https://comicvine.gamespot.com/hulk/4005-2267/","desc":"After being bombarded with a massive dose of gamma radiation while saving a young man's life during an experimental bomb testing, Dr. Robert Bruce Banner was transformed into the Incredible Hulk: a green behemoth who is the living personification of rage and pure physical strength.","indexed":"Hulk After being bombarded with a massive dose of gamma radiation while saving a young man s life during an experimental bomb testing  Dr  Robert Bruce Banner was transformed into the Incredible Hulk  a green behemoth who is the living personification of rage and pure physical strength"},{"title":"Captain America","link":"https://comicvine.gamespot.com/captain-america/4005-1442/","desc":"During World War II, Steve Rogers volunteered to receive the experimental Super-Soldier Serum. Enhanced to the pinnacle of human physical potential and armed with an unbreakable shield, he became Captain America. After a failed mission left him encased in ice for decades, he was found and revived by the Avengers, later joining their ranks and eventually becoming the team's leader.","indexed":"Captain America During World War II  Steve Rogers volunteered to receive the experimental Super Soldier Serum  Enhanced to the pinnacle of human physical potential and armed with an unbreakable shield  he became Captain America  After a failed mission left him encased in ice for decades  he was found and revived by the Avengers  later joining their ranks and eventually becoming the team s leader"},{"title":"Deadpool","link":"https://comicvine.gamespot.com/deadpool/4005-7606/","desc":"Wade Wilson is a former test subject of the Weapon X program, where he received his regenerative healing factor through the scientific experiments conducted upon him. Deadpool's powers and personality traits combine to make a wild, mentally unstable, and unpredictable mercenary. Deadpool has been a member of X-Force and the Thunderbolts, and a self-professed member of the X-Men and the Avengers. The \"Merc with a Mouth\" is infamous for breaking the fourth wall.","indexed":"Deadpool Wade Wilson is a former test subject of the Weapon X program  where he received his regenerative healing factor through the scientific experiments conducted upon him  Deadpool s powers and personality traits combine to make a wild  mentally unstable  and unpredictable mercenary  Deadpool has been a member of X Force and the Thunderbolts  and a self professed member of the X Men and the Avengers  The  Merc with a Mouth  is infamous for breaking the fourth wall"},{"title":"Nick Fury","link":"https://comicvine.gamespot.com/nick-fury/4005-3202/","desc":"Nicholas Joseph Fury served in World War II as the leader of the Howling Commandos. He later became an agent, and eventually director, of S.H.I.E.L.D. Fury is one of the greatest strategic minds in the world, a born leader and a master of espionage. He currently serves as a replacement Watcher.","indexed":"Nick Fury Nicholas Joseph Fury served in World War II as the leader of the Howling Commandos  He later became an agent  and eventually director  of S H I E L D  Fury is one of the greatest strategic minds in the world  a born leader and a master of espionage  He currently serves as a replacement Watcher"},{"title":"Doctor Strange","link":"https://comicvine.gamespot.com/doctor-strange/4005-1456/","desc":"Dr. Stephen Strange was once a gifted but egotistical surgeon who sought out the Ancient One to heal his hands after they were wounded in a car accident. Instead, the Ancient One trained him to become Master of the Mystic Arts and the Sorcerer Supreme of Earth.","indexed":"Doctor Strange Dr  Stephen Strange was once a gifted but egotistical surgeon who sought out the Ancient One to heal his hands after they were wounded in a car accident  Instead  the Ancient One trained him to become Master of the Mystic Arts and the Sorcerer Supreme of Earth"},{"title":"Black Panther","link":"https://comicvine.gamespot.com/black-panther/4005-1477/","desc":"T'Challa is the Black Panther, king of Wakanda, one of the most technologically advanced nations on Earth. He is among the top intellects and martial artists of the world, a veteran Avenger, and a member of the Illuminati. Using his powers and abilities, he has pledged his fortune, powers, and life to the service of all mankind.","indexed":"Black Panther T Challa is the Black Panther  king of Wakanda  one of the most technologically advanced nations on Earth  He is among the top intellects and martial artists of the world  a veteran Avenger  and a member of the Illuminati  Using his powers and abilities  he has pledged his fortune  powers  and life to the service of all mankind"}];
var entries = JSON.parse(localStorage.getItem('entries')) || defaultEntries;
var pastSearches = JSON.parse(localStorage.getItem('pastSearches')) || [];
var trie = createTrie(entries, 'indexed');

function onlyUnique(value, index, self) {
    return self.indexOf(value) === index;
}

function renderResults(results) {
    $('#mainContent').html('');
    results.forEach(result => {
        var resultHtml = `<div class="searchResult">
            <h3><a href="${result.link}">${result.title}</a></h3>
            <a href="${result.link}" class="searchLink">${result.link}</a><br/>
            <p>${result.desc}</p>
            <div class="hrLine"></div>
        </div>`
        $('#mainContent').append(resultHtml);
    });
    return false;
}

function renderEntries(entries) {
    entries.forEach(entry => {
        var entryHtml = `<div class="entry">
            <table class="table borderless table-responsive table-condensed">
                <tbody>
                    <tr><th>Title</th><td>${entry.title}</td></tr>
                    <tr><th>Link</th><td>${entry.link}</td></tr>
                    <tr><th>Desc</th><td>${entry.desc}</td></tr>
                </tbody>
            </table>
        </div>`
        $('#entryList').append(entryHtml);
    });
    return false;
}

function renderSearchSuggestions(suggestions) {
    var suggestionHtmlList = [];
    suggestions.forEach(suggestion => {
        var suggestionHtml = `<button class="suggestion" onClick="myFunc(this);">${suggestion}</button>`
        suggestionHtmlList.push(suggestionHtml);
    });
    var suggestionsHtml = '';
    if (suggestionHtmlList.length > 0 ) {
        suggestionsHtml = `<div class="searchSuggestionSeparator"></div><div id="searchSuggestions">${suggestionHtmlList.join('')}</div>`;
    }
    $('#searchList').html(suggestionsHtml);
    return false;
}



$('#contentEntryForm').children( "form" ).submit(event => {
    var newEntry = {
        "title": $('#entryTitle').val(),
        "link": $('#entryLink').val(),
        "desc": $('#entryDescription').val(),
        "indexed": (`${$('#entryTitle').val()} ${$('#entryDescription').val()}`).replace(/[^\w\s]/gi, ' ').trim()
    };
    entries.push(newEntry);
    localStorage.setItem('entries', JSON.stringify(entries));
    renderEntries(entries);
    return false;
})

function renderFoundSuggestions() {
    query = $('#searchBox').val();
    if (query.length > 2) {
        var suggestions = trie.getMatches(query, { limit: 12});
        var queryRegex = new RegExp("^(" + query + ")|([ ]" + query + ")", "i");
        var suggestionList = [query];
        suggestions.forEach(suggestion => {
            suggestionList.push(suggestion.indexed.slice(queryRegex.exec(suggestion.indexed).index));
        });
        suggestionList = suggestionList.filter(onlyUnique).slice(0, 6);
        renderSearchSuggestions(suggestionList);
    }
    else if (query.length > 0) {
        renderSearchSuggestions([query]);
    }
    else {
        renderSearchSuggestions(pastSearches);
    }
    return false;
}


function searchEntries() {
    hideSearchList();
    query = $('#searchBox').val();

    var searchResults = trie.getMatches(query);
    renderResults(searchResults);

    if (searchResults.length == 0) {
        $('#contentMeta').html(`No results for search "${query}"`);
    }
    else {
        $('#contentMeta').html(`Showing Results for "${query}"`);
    }
    return false;
}

function hideSearchList() {
    $('#searchList').attr('class', '');
}

function showSearchList(event) {
    event.stopPropagation();
    $('#searchList').addClass('displayBlock');
}

function myFunc(elem) {
    console.log("yo");
    var selectedSuggestion = $(elem).text();
    $('#searchBox').val(selectedSuggestion);
    searchEntries();
}

$(document).ready(function(){

    $('#searchBox').on('input', renderFoundSuggestions);
    $('#searchForm').submit(searchEntries);
    $('#searchBox').click(showSearchList);
    $(document).on('click', function(){
        hideSearchList();
    });
    renderEntries(entries);
});
