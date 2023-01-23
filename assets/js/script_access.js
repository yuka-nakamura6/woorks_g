jQuery(function () {
  jQuery('#datepicker').datepicker({
    dateFormat: 'yy年mm月dd日',
    minDate: 0
  });
});
//予約フォーム
$(function () {
  // 全てのアラート文を非表示にする
  $(".reserve .alert").hide();

  // 送信ボタンをクリック
  $("#submitBtn").click(function () {
    // チェック用の変数sendFlag
    var sendFlag = true;

    // 一行入力フィールドのチェック
    if (!$("#text").val()) {
      // 入力がない：アラート文を表示
      $("#textSection .alert").show();
      sendFlag = false; // 入力がなければfalseに
    } else {
      // 入力がある：アラート文を非表示
      $("#textSection .alert").hide();
    }
    // 一行入力フィールドのチェック
    if (!$("#tel").val()) {
      // 入力がない：アラート文を表示
      $("#telSection .alert").show();
      sendFlag = false; // 入力がなければfalseに
    } else {
      // 入力がある：アラート文を非表示
      $("#telSection .alert").hide();
    }
    // 一行入力フィールドのチェック
    if (!$("#datepicker").val()) {
      // 入力がない：アラート文を表示
      $("#dateSection .alert").show();
      sendFlag = false; // 入力がなければfalseに
    } else {
      // 入力がある：アラート文を非表示
      $("#dateSection .alert").hide();
    }


    // セレクトボックスのチェック
    if ($("select").val() == "none") {
      // 選択がない：アラート文を表示
      $(".timeSection .alert").show();
      sendFlag = false; // 「---」を選択していたらfalseに
    } else {
      // 選択がある：アラート文を非表示
      $(".timeSection .alert").hide();
    }

    // 変数sendFlagの値をチェック
    if (sendFlag == false) {
      return false; // falseであれば送信を許可しない（そうでなければ送信）
    }
  });
});

//お問い合わせ
$(function () {
  // 全てのアラート文を非表示にする
  $(".contact .alert").hide();

  // 送信ボタンをクリック
  $("#contact_submit").click(function () {
    // チェック用の変数sendFlag
    var sendFlag = true;
    //名前欄
    // 一行入力フィールドのチェック
    if (!$("#contact_name").val()) {
      // 入力がない：アラート文を表示
      $(".contact_name_section .alert").show();
      sendFlag = false; // 入力がなければfalseに
    } else {
      // 入力がある：アラート文を非表示
      $(".contact_name_section .alert").hide();
    }

    //tel
    if (!$("#contact_tel").val()) {
      // 入力がない：アラート文を表示
      $(".contact_tel_section .alert").show();
      sendFlag = false; // 入力がなければfalseに
    } else {
      // 入力がある：アラート文を非表示
      $(".contact_tel_section.alert").hide();
    }

    //mail
    if (!$("#contact_email").val()) {
      // 入力がない：アラート文を表示
      $(".contact_email_section .alert").show();
      sendFlag = false; // 入力がなければfalseに
    } else {
      // 入力がある：アラート文を非表示
      $(".contact_email_section .alert").hide();
    }
   
    // 複数行入力フィールドのチェック
    if (!$("#textarea").val()) {
      // 入力がない：アラート文を表示
      $(".contact_section .alert").show();
      sendFlag = false; // 入力がなければfalseに
    } else {
      // 入力がある：アラート文を非表示
      $(".contact_section .alert").hide();
    }

    // 変数sendFlagの値をチェック
    if (sendFlag == false) {
      return false; // falseであれば送信を許可しない（そうでなければ送信）
    }
  });
});

