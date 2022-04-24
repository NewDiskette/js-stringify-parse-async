/*
    асинхронная функция заполнения () {

        URL-адрес запроса = 'https://github.com/newdiskette/js-stringify-parse-async/blob/master/content/content2.txt';
        запрос = новый запрос (URL-адрес запроса);

        ответ = ожидание выборки (запрос);
        текст содержимого = ожидание ответа. текст();

        содержимое = JSON. разобрать (текст содержимого);
        заполнитьРаздел(содержимое);
    }
*/
async function populate() {

    const requestURL = 'https://api.github.com/users/defunkt';
    const request = new Request(requestURL);
    console.log(request);    
    const response = await fetch(request);
    const contentText = await response.text();

    const content = JSON.parse(contentText);
    console.log(content);
    populateSection(content);
}

/*
    функция заполнения раздела (объект) {
        раздел = документ. селектор запросов('раздел');

        логин = документ. создатьЭлемент('h2');
        идентификатор = документ. создатьЭлемент('р');
        идентификатор узла = документ. создатьЭлемент('р');
        адрес аватара = документ. создатьЭлемент('р');

        login.textContent = obj['логин'];
        id.textContent = obj['id'];
        node_id.textContent = obj['node_id'];
        avatar_url.textContent = obj['avatar_url'];

        раздел. appendChild(логин);
        раздел. добавить дочерний элемент (идентификатор);
        раздел. добавить дочерний элемент (node_id);
        раздел. добавить дочерний элемент (avatar_url);
    }
*/
function populateSection(obj) {
    const section = document.querySelector('section');

    const login = document.createElement('h2');
    const id = document.createElement('p');
    const node_id = document.createElement('p');
    const avatar_url = document.createElement('p');

    login.textContent = obj['login'];
    id.textContent = obj['id'];
    node_id.textContent = obj['node_id'];
    avatar_url.textContent = obj['avatar_url'];

    section.appendChild(login);
    section.appendChild(id);
    section.appendChild(node_id);
    section.appendChild(avatar_url);
}

populate();