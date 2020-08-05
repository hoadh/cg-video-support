/* Javascript for CGVideoSupportXBlock. */
function CGVideoSupportXBlock(runtime, element) {

    // function updateCount(result) {
    //     $('.count', element).text(result.count);
    // }

    // var handlerUrl = runtime.handlerUrl(element, 'increment_count');

    $('#__codegym__btn-start-support-video').click(function(eventObject) {
      const time = new Date().getTime();
      const domain = 'videocall.staging.codegym.vn'; // 'meet.jit.si'
      const options = {
          roomName: 'CodeGym_VideoCallSupport_at_' + time,
          width: 700,
          height: 700,
          parentNode: document.querySelector('#meet')
      };
      api = new JitsiMeetExternalAPI(domain, options);
    });

    $('#__codegym__btn-stop-support-video').click(function(eventObject) {
      api.dispose();
    });

    // $('p', element).click(function(eventObject) {
    //     $.ajax({
    //         type: "POST",
    //         url: handlerUrl,
    //         data: JSON.stringify({"hello": "world"}),
    //         success: updateCount
    //     });
    // });

    $(function ($) {
        /* Here's where you'd do things on page load. */
    });
}
