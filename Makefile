branch_name=$(shell git rev-parse --abbrev-ref HEAD)
commit_short_hash=$(shell git rev-parse --short HEAD)
safe_image_name=$(shell echo ${branch_name} | tr / -)
image_name = coding-tree-homepage:$(shell echo ${safe_image_name})
current_tags=$(shell git tag --points-at HEAD | xargs -I{} echo {} | paste -s -d",")
container_name = codingtree-homepage-$(safe_image_name)
deployment_dir = apso:coding-tree
aws_url_prefix = 102421067040.dkr.ecr.eu-central-1.amazonaws.com
build_time=$(shell date +"%Y-%m-%d/%H:%M:%S")

AWS_LOGIN := $(@shell aws --profile ecradmin ecr get-login --region eu-central-1)

build:
	docker build \
		--build-arg homepage_url="localhost" \
		--build-arg git_branch="$(branch_name)" \
		--build-arg git_tag="$(current_tags)" \
		--build-arg git_commit="$(commit_short_hash)" \
		--build-arg build_time="$(build_time)" \
		-t $(image_name) .

tag:
	docker tag $(image_name) $(aws_url_prefix)/$(image_name)
	docker tag $(image_name) $(aws_url_prefix)/$(image_name)-$(commit_short_hash)

aws-login:
	$(AWS_LOGIN)

push: aws-login
	docker push $(aws_url_prefix)/$(image_name)
	docker push $(aws_url_prefix)/$(image_name)-$(commit_short_hash)

deploy: build tag aws-login push
	echo "Build tag and push new docker image"

rm:
	docker rm -f $(container_name)

run:
	docker run -d --rm --name $(container_name) -p 9100:80 $(image_name)

archive:
	git archive --format=tar.gz -o /tmp/$(container_name).tar.gz $(branch_name)

extract:
	tar -zxvf $(container_name).tar.gz

send:
	scp /tmp/$(container_name).tar.gz $(deployment_dir)/$(container_name).tar.gz

.PHONY: build push aws-login deploy run rm archive extract send
