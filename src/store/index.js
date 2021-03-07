export const state = () => ({
    domain: `http://127.0.0.1:${process.env.PORT || 3000}`,
});

export const mutations = {
    SET_DOMAIN(state, domain) {
        state.domain = domain;
    }
};

export const actions = {
    async nuxtServerInit({commit}, {req}) {
        // TODO: Protocol from Header (X-Forwarded-Proto)
        console.log(req.headers)
        commit("SET_DOMAIN", `http://${req.headers.host}`);
    }
};