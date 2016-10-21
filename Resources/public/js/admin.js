(function () {
    'use strict';

    var feedback = {
        remove: function (id) {
            var sure;
            sure = confirm("Are you sure?");
            if (!sure) {
                return false;
            }
            $.ajax({
                url: "/admin/feedback/remove/" + id,
                type: "DELETE",
                dataType: 'json',
                success: function (rd) {
                    if (rd.status) {
                        return document.location.reload();
                    } else {
                        return alert('An error has occured');
                    }
                }
            });
            return false;
        },
        show_content: function (id) {
            $("#entity_" + id).slideToggle();
            return false;
        },
        mark_as: {
            read: function (id) {
                $.ajax({
                    url: "/admin/feedback/mark/read/" + id,
                    type: "GET",
                    dataType: "json",
                    success: function (rd) {
                        if (rd.status) {
                            return document.location.reload();
                        } else {
                            return alert('An error has occured');
                        }
                    }
                });
                return false;
            },
            done: function (id) {
                $.ajax({
                    url: "/admin/feedback/mark/done/" + id,
                    type: "GET",
                    dataType: "json",
                    success: function (rd) {
                        if (rd.status) {
                            return document.location.reload();
                        } else {
                            return alert('An error has occured');
                        }
                    }
                });
                return false;
            }
        }
    };

    $(function () {
        var buttons = {
            remove: $(".feedback-delete"),
            mark_as_read: $(".feedback-mark-as-read"),
            mark_as_done: $(".feedback-mark-as-done"),
            show_content: $(".feedback-show-content")
        };
        buttons.remove.on('click', function () {
            return feedback.remove($(this).data('content-id'));
        });
        buttons.mark_as_done.on('click', function () {
            return feedback.mark_as.done($(this).data('content-id'));
        });
        buttons.mark_as_read.on('click', function () {
            return feedback.mark_as.read($(this).data('content-id'));
        });
        buttons.show_content.on('click', function () {
            return feedback.show_content($(this).data('content-id'));
        });
    });
})(jQuery);
