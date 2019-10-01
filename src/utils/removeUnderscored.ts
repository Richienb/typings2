/**
* Remove keys beginning with `_` from the provided object.
*/
export default function removeUnderscored(obj: object): object {
    if (Object(obj) !== obj) return obj
    else if (Array.isArray(obj)) return obj.map((o) => removeUnderscored(o))

    return Object.fromEntries(Object.entries(obj)
        .filter(([k]) => !k.startsWith("_"))
        .map(([k, v]) => ([k, removeUnderscored(v)])
        ))
}
