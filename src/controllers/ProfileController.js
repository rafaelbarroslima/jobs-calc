module.exports = {
    index(req, res) {
        return res.render("profile", { profile: Profile.data });
    },

    update(req, res) {
        // req.body para pegar os dados
        const data = req.body;

        // Definir quantas semanas tem um ano: 52
        const weeksPerYear = 52;

        // Remover as semanas de férias do ano, para pegar quantas semanas tem 1 mês
        const weeksPerMonth = (weeksPerYear - data["vacation-per-year"]) / 12;

        // Total de horas trabalhadas na semana
        const weekTotalHours = data["hours-per-day"] * data["days-per-week"];

        // Horas trabalhadas no mês
        const monthlyTotalHours = weekTotalHours * weeksPerMonth;

        // Qual será o valor da minha hora
        const valueHour = data["monthly-budget"] / monthlyTotalHours;

        Profile.data = {
            ...Profile.data,
            ...req.body,
            "value-hour": valueHour
        }

        return res.redirect('/profile');
    }

}