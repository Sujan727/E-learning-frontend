const Quiz = () => {
  return (
    <div class="container-fluid page__container">
      <ol class="breadcrumb">
        <li class="breadcrumb-item">
          <a href="/Loginhome">Home</a>
        </li>
        <li class="breadcrumb-item active">Quiz</li>
      </ol>
      <div class="card-grouppy">
        <div class="card quizcarddy">
          <div class="card-body text-center">
            <h4 class="mb-0">
              <strong>25</strong>
            </h4>
            <small class="text-muted-light">TOTAL</small>
          </div>
        </div>
        <div class="card quizcarddy">
          <div class="card-body text-center">
            <h4 class="text-success mb-0">
              <strong>3</strong>
            </h4>
            <small class="text-muted-light">CORECT</small>
          </div>
        </div>
        <div class="card quizcarddy">
          <div class="card-body text-center">
            <h4 class="text-danger mb-0">
              <strong>5</strong>
            </h4>
            <small class="text-muted-light">WRONG</small>
          </div>
        </div>
        <div class="card quizcarddy">
          <div class="card-body text-center">
            <h4 class="text-primary mb-0">
              <strong>17</strong>
            </h4>
            <small class="text-muted-light">LEFT</small>
          </div>
        </div>
      </div>

      <div class="card quizcardy">
        <div class="card-header">
          <div class="media align-items-center">
            <div class="media-left">
              <h4 class="mb-0">
                <strong>#9. </strong>
              </h4>
            </div>
            <div class="media-body">
              <h4 class="card-title">What is the value of x in 2x+3=5:</h4>
            </div>
          </div>
        </div>
        <div class="card-body">
          <div class="form-group">
            <div class="custom-control custom-checkbox">
              <input
                id="customCheck01"
                type="checkbox"
                class="custom-control-input"
              />
              <label for="customCheck01" class="custom-control-label">
                x=1
              </label>
            </div>
          </div>
          <div class="form-group">
            <div class="custom-control custom-checkbox">
              <input
                id="customCheck02"
                type="checkbox"
                class="custom-control-input"
              />
              <label for="customCheck02" class="custom-control-label">
                x=3"
              </label>
            </div>
          </div>
          <div class="form-group">
            <div class="custom-control custom-checkbox">
              <input
                id="customCheck03"
                type="checkbox"
                class="custom-control-input"
              />
              <label for="customCheck03" class="custom-control-label">
                x=5
              </label>
            </div>
          </div>
        </div>
        <div class="card-footer">
          <a href="#" class="btn5 btn-white">
            Skip
          </a>
          <a href="#" class="btn3 btn-success float-right">
            Submit <i class="material-icons btn__icon--right"></i>
          </a>
        </div>
      </div>

      <div class="sidebar-p-y">
        <div class="sidebar-heading">Time left</div>
        <div class="countdown sidebar-p-x" data-value="4" data-unit="hour">
          <p class="pl-1 pr-1">
            <span class="h5 text-primary">03</span> hrs{" "}
            <span class="h5 text-primary">34</span> min{" "}
            <span class="h5 text-primary">38</span> sec
          </p>
        </div>

        <div class="sidebar-heading">Pending Questions:</div>
        <hr></hr>
        <p>
        <strong>#9. </strong> What is the value of x in x+3=5:
        </p>

        <p>
        <strong>#10. </strong> what is the command of push in git?
        </p>

        <p>
        <strong>#11. </strong> What is the purpose of a branch?
        </p>
        
        <p>
        <strong>#12. </strong> Final Question?
        </p>
      </div>
    </div>
  );
};

export default Quiz;
