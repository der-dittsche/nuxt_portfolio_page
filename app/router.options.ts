export default {
    scrollBehavior(to: any, from: any, savePostion: any) {
        if (savePostion) {
            return savePostion
        }
        if (to.hash) {
            return {
                el: to.hash,
                top: 10,
                behavior: 'smooth'
            }
        }

        return {left: 0, top: 0, behaviour: 'smooth'}
    }
}