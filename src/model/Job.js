let data = [
    {
        id: 1,
        name: "Pizzaria Guloso",
        "daily-hours": 2,
        "total-hours": 1,
        created_at: Date.now()
    },
    {
        id: 2,
        name: "OneTwo Prokect",
        "daily-hours": 3,
        "total-hours": 47,
        created_at: Date.now()
    }
]

module.exports = {
    get() {
        return data;
    },
    update(newJob) {
        return newJob;
    },
    delete(id) {
        data = data.filter(job => Number(job.id) !== Number(id));
    }
};