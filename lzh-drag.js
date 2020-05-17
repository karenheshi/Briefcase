$.fn.extend({

    lzhDrag: function (obj) {
        var that = $(this).parents()[0]
        let max_left = $(that).offsetParent().outerWidth() - $(that).outerWidth(),
            max_top = $(that).offsetParent().outerHeight() - $(that).outerHeight();
        $(this).on('mousedown', event => {
            let ele_x = event.offsetX,
                ele_y = event.offsetY;
            obj.startDown && obj.startDown();
            $(document).on('mousemove', e => {
                obj.startMove && obj.startMove();
                e.preventDefault();
                let left = e.clientX - ele_x,
                    top = e.clientY - ele_y;
                left = left < 0 ? 0 : left;
                top = top < 0 ? 0 : top;
                left = left > max_left ? max_left : left;
                top = top > max_top ? max_top : top;
                $(that).css({
                    left, top
                })
            })
        })
        $(document).on('mouseup', () => {

            $(document).off('mousemove');
            obj.overMove && obj.overMove();
        })
        return this;
    }
})