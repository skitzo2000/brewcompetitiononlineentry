// JavaScript Document
$(function () {
	$('#contestEntryOpen').datetimepicker({
		format: 'YYYY-MM-DD hh:mm A'
	});
	
	$('#contestEntryDeadline').datetimepicker({
		format: 'YYYY-MM-DD hh:mm A'
	});
	
	$('#contestRegistrationOpen').datetimepicker({
		format: 'YYYY-MM-DD hh:mm A'
	});
	
	$('#contestRegistrationDeadline').datetimepicker({
		format: 'YYYY-MM-DD hh:mm A'
	});
	
	$('#contestJudgeOpen').datetimepicker({
		format: 'YYYY-MM-DD hh:mm A'
	});
	
	$('#contestJudgeDeadline').datetimepicker({
		format: 'YYYY-MM-DD hh:mm A'
	});
	
	$('#contestShippingOpen').datetimepicker({
		format: 'YYYY-MM-DD hh:mm A'
	});
	
	$('#contestShippingDeadline').datetimepicker({
		format: 'YYYY-MM-DD hh:mm A'
	});
	
	$('#contestDropoffOpen').datetimepicker({
		format: 'YYYY-MM-DD hh:mm A'
	});
	
	$('#contestDropoffDeadline').datetimepicker({
		format: 'YYYY-MM-DD hh:mm A'
	});
	
	$('#contestAwardsLocDate').datetimepicker({
		format: 'YYYY-MM-DD hh:mm A'
	});

	$('#prefsWinnerDelay').datetimepicker({
		format: 'YYYY-MM-DD hh:mm A'
	});
	
	$('#judgingDate').datetimepicker({
		format: 'YYYY-MM-DD hh:mm A'
	});
	
	$('#brewDate').datetimepicker({
		format: 'YYYY-MM-DD'
	});
	
	$('#brewBottleDate').datetimepicker({
		format: 'YYYY-MM-DD'
	});
	
	$("#purge-part-participants-value").datetimepicker({
        format: "YYYY-MM-DD"
    });
	
	$("#dateThresholdPayments").datetimepicker({
        format: "YYYY-MM-DD"
    });
	
	$("#purge-entries-brewing-value").datetimepicker({
        format: "YYYY-MM-DD"
    });

    $('#jPrefsJudgingOpen').datetimepicker({
		format: 'YYYY-MM-DD hh:mm A'
	});

	$('#jPrefsJudgingClosed').datetimepicker({
		format: 'YYYY-MM-DD hh:mm A'
	});
	
});