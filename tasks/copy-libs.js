import { paths } from "../gulpfile.esm"
import {src, dest} from "gulp"

function copyLibs (cb) {
    src(paths.libs.css.src)
        .pipe(dest(paths.libs.css.dist))
    src(paths.libs.js.src)
        .pipe(dest(paths.libs.js.dist))
    cb()
}

export default copyLibs