# ejin-github

맨 처음 git 폴더 초기화 (.git 폴더 생성)
  git init 

스테이지에 올리기
  git add . (변경 내역 있는 파일만 올리기)
  git add 파일명 (특정 파일만 올리기)
  git add * (모든 파일 올리기)
스테이징 취소
  git reset 파일명

커밋 
  git commit
메세지 첨부해서 커밋
  git commit -m "메세지"
add를 생략하고 바로 커밋하고 싶을 때 
  git commit -a

커밋 내역 확인
  git log 
여기에 뜬 commit id를 이용해 이전 커밋으로 돌아갈 수 있음 

현재 브랜치에서 생성한 커밋을 서버에 올리기 
  git push -u origin 브랜치이름
-u 는 브랜치의 업스트림을 등록 (한 번만 하면 됨) 이후에는 
  git push origin main

현재 상태
  git status