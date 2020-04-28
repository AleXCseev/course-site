const keys = require("../keys");

module.exports = function (email) {
	return {
		from: '"Fred Foo 👻" <foo@example.com>',
		to: email,
		subject: "Аккаунт создан",
		text: "This message with attachments.",
		html: `
            <h1>Добро пожаловать в наш магазин</h1>
            <p>Вы успешно создали аккаунт с email - ${email}</p>
            <hr/>
            <a href="${keys.BASE_URL}">Магазин курсов</a>
        `,
	};
};
