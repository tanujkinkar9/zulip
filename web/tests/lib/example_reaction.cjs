"use strict";

exports.make_reaction = (opts = {}) => {
    const defaults = {
        emoji_name: "smile",
        emoji_code: "1f604",
        reaction_type: "unicode_emoji",
        user_id: opts.user_id ?? 1,
    };

    return {...defaults, ...opts};
};
