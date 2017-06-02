/**
 * Created by 41563 on 2017/5/31.
 */
function AddFavorite(title, url) {
    try {
        window.external.addFavorite(url, title);
    }
    catch (e) {
        try {
            window.sidebar.addPanel(title, url, "");
        }
        catch (e) {
            alert("sorry,fail collet\n\ncollect Ctrl+D");
        }
    }
}