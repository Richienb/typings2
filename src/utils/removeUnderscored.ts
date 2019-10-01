export default function removeUnderscored(obj: object) {
    if (Object(obj) !== obj) return obj
    else if (Array.isArray(obj)) return obj.map(o => removeUnderscored(o))

    return Object.fromEntries(Object.entries(obj)
        .filter(([k, v]) => !k.startsWith("_"))
        .map(([k, v]) => ([k, removeUnderscored(v)])
        ));
}
