$(document).ready(function() {

    let globalCurrentPage=1; //현재 페이지

    function get_board_list(){
        $.ajax({
            type: "post",
            url : "/miraeAdmin/Service/get_board_list.php",
            data : {"currentpage":globalCurrentPage},
            dataType:"json",
            success : function(data, status, xhr) {
                //console.log(data);
                $('#board_list').empty();
                $.each(data.post_data, function (index, value) {

                    const arr = value.upload_dt.split("/");
                    let html = '';
                    html += "<div class=\"item\">";
                        html += "<div class=\"top\">";
                            html += "<div class=\"left\">";
                                html += "<p class=\"day\">"+arr[1]+"</p>";
                                html += "<p class=\"yearmonth\">"+arr[2]+"."+arr[0]+"</p>";
                            html += "</div>";
                            html += "<p class=\"center\">"+value.post_title+"</p>";
                            html += "<span class=\"arrow\">▼</span>";
                        html += "</div>";
                        html += "<div class=\"bottom\">";
                            html += value.post_details;
                        html += "</div>";
                    html += "</div>";
                    $('#board_list').append(html);
                    paging(data.total_cnt[0].cnt, 5, 5, globalCurrentPage);
                });


            },
            error: function(jqXHR, textStatus, errorThrown) {
                console.log(jqXHR.responseText);
            }
        });
    }



    function paging(totalData, dataPerPage, pageCount, currentPage) {
        //console.log("currentPage : " + currentPage);

        totalPage = Math.ceil(totalData / dataPerPage); //총 페이지 수

        if(totalPage<pageCount){
            pageCount=totalPage;
        }

        let pageGroup = Math.ceil(currentPage / pageCount); // 페이지 그룹
        let last = pageGroup * pageCount; //화면에 보여질 마지막 페이지 번호

        if (last > totalPage) {
            last = totalPage;
        }

        let first = last - (pageCount - 1); //화면에 보여질 첫번째 페이지 번호
        let next = last + 1;
        let prev = first - 1;

        let pageHtml = "";

        if (prev > 0) {
            //pageHtml += "<li><a href='#' id='prev'> 이전 </a></li>";
            pageHtml += "<a href='#' id='first_prev'><span class=\"black\"><<</span></a><a href='#' id='prev'><span class=\"white\"><</span></a>";
        }

        //페이징 번호 표시
        for (var i = first; i <= last; i++) {
            if (currentPage == i) {
                pageHtml +=
                    "<div class=\"page page_select\"><a href='#' id='" + i + "'>" + i + "</a></div>"
            } else {
                pageHtml += "<div class=\"page\"><a href='#' id='" + i + "'>" + i + "</a></div>"
            }
        }

        if (last < totalPage) {
            //pageHtml += "<li><a href='#' id='next'> 다음 </a></li>";
            pageHtml += "<a href='#' id='next'><span class=\"white\">></span></a><a href='#' id='last_next'><span class=\"black\">>></span></a>";
        }
        $('#paging_wrap').empty();
        $("#paging_wrap").append(pageHtml);

        //페이징 번호 클릭 이벤트
        $("#paging_wrap a").click(function (e) {
            e.preventDefault();
            let $id = $(this).attr("id");
            selectedPage = $(this).text();
            if ($id == "next") selectedPage = next;
            if ($id == "prev") selectedPage = prev;

            if ($id == "first_prev") selectedPage = 1;
            if ($id == "last_next") selectedPage = totalData;

            //console.log(selectedPage);

            globalCurrentPage = selectedPage;
            get_board_list();
        });
    }

    get_board_list();
});